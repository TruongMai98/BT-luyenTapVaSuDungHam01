let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellations = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
let star = prompt("nhap ten ngoi sao");
function checkConstellation(star) {
    let result = null;
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] == star){
            result = constellations[i];
            break;
        }else {
            result =" khong tim thay chom sao tuong ung";
        }
    }
    return result;
}
document.write(checkConstellation(star));