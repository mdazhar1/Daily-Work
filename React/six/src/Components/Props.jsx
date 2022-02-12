import React from 'react';
import ChildProps from './ChildProps';





const Props = () => {
    // const initialState={
    const Cards = [
        {
            id: 1,
            title: "Nature",
            desc: "Chupke se bheja tha ek Gulaab use Magar...... Khushbu ne sare Shaher me tamasha bana diya",
            CardImg: "https://img1.etsystatic.com/219/1/14287452/il_570xN.1341611117_gn9v.jpg",
        },
        {
            id: 2,
            title: "Nature",
            desc: "Phoolo ki numaish me agar wo bhi aa baithe.... To is baar gulabo ko badi Aag lagegi",
            CardImg: "https://th.bing.com/th/id/R.9d1597b5801d65eec7f0de844aa3849e?rik=fzR3oXt14NWUMw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1189%2f9314%2farticles%2frose_water_benefits_1024x1024.jpg%3fv%3d1497988413&ehk=qj8nX52fSypL1SjpeF3DWi7Pjl9xyocOaY%2f%2bJ324%2fVc%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id: 3,
            title: "Joker",
            desc: "Hum wo Ana parast hai jo haar kar bhi kahte hai..... wo manzil hi badnaseeb thi jo hme pa na saki",
            CardImg: "https://images.hdqwalls.com/download/neon-guy-mask-smiling-4k-oa-1366x768.jpg",
        },
        {
            id: 4,
            title: "Eyes",
            desc: "Teri aankho ko jab se dekha hai....... Meri aankho pe log marte hai",
            CardImg: "https://wallup.net/wp-content/uploads/2016/02/29615-green_eyes-green-veils-women.jpg",
        },
        {
            id: 5,
            title: "Eyes",
            desc: "Hazar jaam tasadduq Hazar Maiqane.......... Nigah e yaar ki Lazzat Sharab kya jane",
            CardImg: "https://th.bing.com/th/id/R.fa09e377487ea5a27bca367caa10d45c?rik=%2ba2bh93BYoy%2faA&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2016%2f06%2f22%2fbeautiful-eye-image.jpg&ehk=7%2b5DdISNl%2bcyFiPqMhegdPfR%2fWFh0bk3iMJucr0FWtg%3d&risl=&pid=ImgRaw&r=0",
        }
    ]
    return (
        <div>
            <h1>Dynamic Props</h1>
            <ChildProps initialState={Cards} />
        </div>
    );
}
// }

export default Props;