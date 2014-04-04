function formValidation()
{
    var uid = document.registration.username;
    var passid = document.registration.passid;
    var uname = document.registration.name;
    var ucity = document.registration.city;
    var ustate = document.registration.state;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; if(username_validation(uid,5,12))
{
    if(passid_validation(passid,7,12))
    {
        if(allLetter(uname))
        {
            if(alphanumeric(ucity))
            {
                if(allLetters(ustate))
                {
                    if(allnumeric(uzip))
                    {
                        if(ValidateEmail(uemail))
                        {
                            if(validsex(umsex,ufsex))
                            {
                            }
                        }
                    }
                }
            }
        }
    }
}
    return false;

} function username_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    return true;
}
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}
function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function alphanumeric(ucity)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(ucity.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        ucity.focus();
        return false;
    }
}
function allLetters(ustate)
{
    var letters = /^[A-Za-z]+$/;
    if(ustate.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('State must have alphabet characters only');
        ustate.focus();
        return false;
    }
}
function allnumeric(uzip)
{
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
} function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked)
    {
        x++;
    }
    if(ufsex.checked)
    {
        x++;
    }

    if (x==2)
    {
        alert('Both Male/Female are checked');
        ufsex.checked=false
        umsex.checked=false
        umsex.focus();
        return false;
    }

    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}