//slide bar icons
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilTimes

} from "@iconscout/react-unicons";
//import { Card } from "@mui/material";
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"

//sidebar data
export const SidebarData = [{
    icon: UilEstate,
    heading: "Dashboard",
},
{
    icon: UilClipboardAlt,
    heading: "Orders",
},
{
    icon: UilUsersAlt,
    heading: "Customers",
},
{
    icon: UilPackage,
    heading: "Products",
},
{
    icon: UilChart,
    heading: "Analytics",
},
];
export const CardsData = [{
    title: "Sales",
    color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px, 10px, 20px, 0px"
    },
    barValue: 50,
    value: "25,700",
    png: UilPackage,
    series: [{
        name: "sales",
        data: [31, 40, 50, 22, 59, 100, 109],
    },
    ],
},
{
    title: "Revenue",
    color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #c484f3 100%)",
        boxShadow: "0px, 10px, 20px, #FDC0c7",
    },
    barValue: 65,
    value: "14,270",
    png: UilChart,
    series: [{
        name: "Revenue",
        data: [31, 40, 50, 22, 59, 100, 109],
    },
    ],
},
{
    title: "Expense",
    color: {
        backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px, 10px, 20px, 0px, F9D59B",
    },
    barValue: 80,
    value: "25,700",
    png: UilUsersAlt,
    series: [{
        name: "Expense",
        data: [31, 40, 20, 22, 19, 10, 50],
    },
    ],
},
];
export const UpdatesData = [
    {
img: img1,
name: "Ameer Hamza",
noti: " has odered fast food",
time: "2minutes ago"
    },
    {
        img: img2,
        name: "Ali Amin",
        noti: " has odered Veg food",
        time: "1 minute ago"
            },
            {
                img: img3,
                name: "Sulman Ali",
                noti: " has odered fast food",
                time: "4 minute ago"
                    }
]
