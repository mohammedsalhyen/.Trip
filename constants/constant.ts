// here i store nav links 

import { comment } from "postcss"

export const navLinks=[
    {href:"/", name:"Home", key:"home"},
    {href:"/", name:"Pricing", key:"pricing"},
    {href:"/", name:"About us", key:"about_us"},
    {href:"/", name:"Contact", key:"Contact us"},
]

// here i store some advantages
export const advantages=[
    {
        name :"Digital Process", 
    img:"/receipt.png", 
    key:"Digital" ,
    desc:"Navigate efficiency in the digital realm with Digital Process." ,
    link:"Read More",
    aos:"slide-right",
    ease:"ease-in-out"
},
    {name :"Fast Process",
    img:"/timer-start.png", 
    key:"Fast" ,
    desc:"Accelerate success with Fast Process. Zero delays, rapid results." ,
    link:"Read More",
    aos:"slide-up",
    ease:"ease-in"
},
    {name :"Safe Secure",
    img:"/shield-security.png", 
    key:"Safe" ,
    desc: "Trust Safe Secure for fortified data and transactions." ,
    link:"Read More",
    aos:"slide-left",
    ease:"linear"
 },
]

export const footerLinks=[
    {name:"©2024 .Trip LTD" ,href:"/",key:"1"},
    {name:"Inclusion, Equality& Diversity Policy" ,href:"/",key:"2"},
    {name:"Privacy Policy" ,href:"/",key:"3"}
]

export const Statistics=[
    {name:"Total Users" ,number:"5,65,653+" ,color:"#F2AC57" ,time:"0"},
    {name:"Total Investors" ,number:"12,645+",color:"#14A38B" ,time:"300"},
    {name:"Total Trvellers" ,number:"2,50,263+",color:"#6D5A9B",time:"600"},
    {name:"Users Added Today" ,number:"4.1,220+",color:"#0099CA",time:"900"}
]

export const partners =[
    {src:"/image 89.png" ,key:"1",time:"0"},
    {src:"/image 90.png" ,key:"2",time:"200"},
    {src:"/image 91.png" ,key:"3",time:"400"},
    {src:"/image 92.png" ,key:"4",time:"600"},
    {src:"/image 93.png" ,key:"5",time:"800"},
]

export const testmonials=[
    {
        img:"/person1.jpg",
        name:"Mohammed A.",
        Conuntry:"Kanda",
        comment:" I use this App and it's amazing experment i search for it for a long time",
        countryImage:"/Kanda.png",
        key:"1",
        aos:"fade-down-left",
        ease:"ease-in-out"
    },
    {
        img:"/person2.jpg",
        name:"Moral jun",
        Conuntry:"USA",
        comment:" I travel with .Trip Company and it's wonderful journy",
        countryImage:"/usa.png",
        key:"2",
        aos:"fade-down",
        ease:"ease-in-out"
    },
    {
        img:"/person3.jpg",
        name:"Kendral",
        Conuntry:"Kanda",
        comment:" i can not say more than if i would to travel ,i will only choose .Trip Company",
        countryImage:"/Kanda.png",
        key:"3",
        aos:"fade-down-right",
        ease:"ease-in-out"
    },

]


