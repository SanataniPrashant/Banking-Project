const costumerModel = require("../Model/costomerModel")
const costumerAccountModel = require("../Model/CustomerAccountModel")
const transactionModel = require("../Model/TransactionModel")

const autoPass = require("../Middleware/autoPass")
const nodemailer = require("nodemailer");


const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const costumerRegistration = async (req, res) => {
    const{name,phone,email,password} = req.body;
   try{
    const { validate } = require('email-validator');
    if (!validate(email)) {
    return res.status(400).send({ msg: "Invalid email" });
  }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password , salt)
    const customerData = await costumerModel.create({
      name:name,
      phone:phone,
      email:email,
      password:hashPassword
  })
  res.status(200).send({msg:"Registered successfully"});
  }catch(error){
    res.status(400).send({msg:"Registration unsuccessfully"})
  } 
}
    
const costumerLogin  = async(req , res)=>{
 const{email , password} = req.body
 
try {
  const data = await costumerModel.findOne({email : email})
 const hashPassword = await bcrypt.compare(password, data.password );
  if(!data)
  {
    return res.status(400).send({msg:"Invalid email"})
  }
  if(!hashPassword)
  {
    return res.status(400).send({msg:"Invalid password"})
  }
  const token = await jwt.sign({id : data._id} , process.env.SECRET_KEY , {expiresIn : "30d"}) 
  res.status(200).send({token : token})
} catch (error) {
  res.status(400).send({msg:"Invalid credentials"})
}

}


const account = async (req, res) => {
  const myPass = autoPass.autoPass();
  const imageUrls = req.files.map(file => file.path);
  const {firstname, lastname,dob, email,mobile,address,city,aadhar,pan} = req.body;
  const accountno = aadhar+1;
  const { validate } = require('email-validator');
  if (!validate(email)) {
    return res.status(400).send({ msg: "Invalid email" });
  }
    const accountData = await costumerAccountModel.find({email:email})
  
    if (accountData.length > 0) {
      return res.status(400).send({msg:"Account already exists"});
    }
 
   const customeraccount= await costumerAccountModel.create({
    firstname:firstname,
    lastname:lastname,
    dob:dob,
    email:email,
    mobile:mobile,
    address:address,
    city:city,
    aadhar:aadhar,
    pan:pan,
    images:imageUrls,
    password : myPass,
    account:accountno
   })

   const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prashantpandey76867@gmail.com",
      pass: "vvne duck dafx fjgv", 
    },
  });
  let maildetails = {
    from : "prashantpandey76867@gmail.com",
    to : email,
    subject : "E-Banking registration",
    text : `Dear ${firstname} ${lastname} Your account successfully created \n and your account no. is ${accountno} and  Your Password is ${myPass}`
  }
  try {
    transporter.sendMail(maildetails )
   res.status(200).send({msg:"your password and account no sent into your email account"});
  } catch (error) {
    return res.status(400).send(error);
  }
}

const acclogin  = async(req , res)=>{
  const{email, account, password} = req.body
  const data = await costumerAccountModel.findOne({email : email})
 try {
   if(!data)
   {
     return res.status(400).send({msg:"Invalid email"})
   }
   if(data.account !=account)
    {
      return res.status(400).send({msg:"Invalid account no"})
    }
   if(data.password !=password)
   {
     return res.status(400).send({msg:"Invalid password"})
   }
   
   res.status(200).send(data);
 } catch (error) {
   res.status(400).send(error)
 }
 
 }

 const DepositData = async(req ,res)=>{
  const{amount , status ,transactiontype,transactionfor, customerid} = req.body;
  const data = await transactionModel.create({
    amount : amount,
    transactiontype:transactiontype,
    transactionfor:transactionfor,
    status : status,
    customerid : customerid
  })
res.status(200).send(data)
}
const balanceDisplay = async(req , res)=>{
  const {userid} = req.query
  const data = await transactionModel.find({customerid : userid})
  res.status(200).send(data)
}


module.exports = {
    costumerRegistration,
    costumerLogin,
    account,
    acclogin,
    DepositData,
    balanceDisplay
}