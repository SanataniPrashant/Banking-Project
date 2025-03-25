const autoPass = ()=>{
  let string = "qwertyuiopasdfghjklzxcvbnm1234567890{}:><?@QWERTYUIOPASDFGHJKLZXCVBNM"
  let Pass = ""
  for(var i = 0 ; i<8;i++)
  {
   let myno = Math.floor(Math.random()*string.length)
   Pass += string.charAt(myno)
  }
  return Pass;
}
module.exports = {
  autoPass
}