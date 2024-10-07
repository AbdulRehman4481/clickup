// import Link from 'next/link'
// import { FaFacebookSquare } from "react-icons/fa";
// import { ImLinkedin } from "react-icons/im";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import { FaSquareXTwitter } from "react-icons/fa6";

// export default function Footer() {
//     return (
//         <div>
//             <div className="flex flex-wrap justify-between items-center text-sm mt-16 border border-gray-200">
//                 <div className="mb-2 sm:mb-0 w-[1080px] max-[1082px]:w-[1040px] max-[1045px]:w-[1010px] mx-auto grid grid-cols-4">
//                     <div className="logo flex justify-center items-center">
//                         <img src="/assets/images/logo-symbol.svg" className="h-6 w-6" alt="" />
//                         <span className="font-semibold">
//                             The everything app for work.
//                         </span>
//                     </div>
//                     <div className="border-r">
//                         <span className="mr-4 mb-2 sm:mb-0">24/7 support</span>
//                     </div>
//                     <div className="">
//                         <span>99.9% uptime</span>
//                     </div>
//                     <div className="">
//                         <span className="mr-4 mb-2 sm:mb-0">Secure and compliant</span>
//                     </div>
//                     <div className="">
//                         <span className="mr-4 mb-2 sm:mb-0">Weekly updates</span>
//                     </div>
//                 </div>
//             </div>
//             <footer className="bg-gray-50 text-gray-600 py-8 border-gray-200">

//                 <div className="w-[1080px] max-[1082px]:w-[1040px] max-[1045px]:w-[1010px] mx-auto px-4">
//                     {/* Main footer content */}
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
//                         <div>
//                             <h3 className="font-semibold mb-4">ClickUp</h3>
//                             <ul className="space-y-2">
//                                 <li><Link href="#">Download</Link></li>
//                                 <li><Link href="#">About Us</Link></li>
//                                 <li><Link href="#">Careers</Link></li>
//                                 <li><Link href="#">Customers</Link></li>
//                                 <li><Link href="#">Community</Link></li>
//                                 <li><Link href="#">Affiliate & Referrals</Link></li>
//                                 <li><Link href="#">Reviews</Link></li>
//                                 <li><Link href="#">Press</Link></li>
//                                 <li><Link href="#">Brand</Link></li>
//                                 <li><Link href="#">Product Roadmap</Link></li>
//                                 <li><Link href="#">Status</Link></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-semibold mb-4">Resources</h3>
//                             <ul className="space-y-2">
//                                 <li><Link href="#">Help Docs</Link></li>
//                                 <li><Link href="#">On-Demand Demo</Link></li>
//                                 <li><Link href="#">ClickUp University</Link></li>
//                                 <li><Link href="#">Webinars</Link></li>
//                                 <li><Link href="#">Events</Link></li>
//                                 <li><Link href="#">Templates</Link></li>
//                                 <li><Link href="#">Import</Link></li>
//                                 <li><Link href="#">API</Link></li>
//                                 <li><Link href="#">Consultants</Link></li>
//                                 <li><Link href="#">Partners</Link></li>
//                                 <li><Link href="#">Contact Us</Link></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-semibold mb-4">Features</h3>
//                             <ul className="space-y-2">
//                                 <li><Link href="#">Gantt Chart</Link></li>
//                                 <li><Link href="#">Dashboards</Link></li>
//                                 <li><Link href="#">Native Time Tracking</Link></li>
//                                 <li><Link href="#">Mind Maps</Link></li>
//                                 <li><Link href="#">Automations</Link></li>
//                                 <li><Link href="#">Notepad</Link></li>
//                                 <li><Link href="#">Integrations</Link></li>
//                                 <li><Link href="#">Email</Link></li>
//                                 <li><Link href="#">To-Do List</Link></li>
//                                 <li><Link href="#">Kanban Board</Link></li>
//                                 <li><Link href="#">Sprints</Link></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-semibold mb-4">Compare</h3>
//                             <ul className="space-y-2">
//                                 <li><Link href="#">vs Monday</Link></li>
//                                 <li><Link href="#">vs Asana</Link></li>
//                                 <li><Link href="#">vs Jira</Link></li>
//                                 <li><Link href="#">vs Trello</Link></li>
//                                 <li><Link href="#">vs Airtable</Link></li>
//                                 <li><Link href="#">vs Notion</Link></li>
//                                 <li><Link href="#">vs Basecamp</Link></li>
//                                 <li><Link href="#">vs Wrike</Link></li>
//                                 <li><Link href="#">vs MS Project</Link></li>
//                                 <li><Link href="#">vs Todoist</Link></li>
//                                 <li><Link href="#">vs Smartsheet</Link></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-semibold mb-4">Learn</h3>
//                             <ul className="space-y-2">
//                                 <li><Link href="#">Blog</Link></li>
//                                 <li><Link href="#">Software Team Hub</Link></li>
//                                 <li><Link href="#">Agency Hub</Link></li>
//                             </ul>
//                             <h3 className="font-semibold mt-8 mb-4">Connect</h3>
//                             <div className="flex space-x-4">
//                                 <Link href="#" className="text-gray-400 hover:text-gray-600">
//                                     <ImLinkedin size={24} />
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-gray-600">
//                                     <FaFacebookSquare size={24} />
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-gray-600">
//                                     <PiInstagramLogoFill size={24} />
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-gray-600">
//                                     <FaSquareXTwitter size={24} />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* App store buttons */}
//                     <div className="flex flex-wrap justify-center sm:justify-start space-x-4 mb-8">
//                         <Link href="#" className="mb-2">
//                             <img src="/placeholder.svg?height=40&width=120" alt="Download on the App Store" className="h-10" />
//                         </Link>
//                         <Link href="#" className="mb-2">
//                             <img src="/placeholder.svg?height=40&width=135" alt="Get it on Google Play" className="h-10" />
//                         </Link>
//                         <Link href="#" className="mb-2">
//                             <img src="/placeholder.svg?height=40&width=120" alt="Download on the Mac App Store" className="h-10" />
//                         </Link>
//                         <Link href="#" className="mb-2">
//                             <img src="/placeholder.svg?height=40&width=120" alt="Get it from Microsoft" className="h-10" />
//                         </Link>
//                     </div>

//                     {/* Copyright and legal */}
//                     <div className="text-sm text-center sm:text-left">
//                         <p>&copy; 2024 ClickUp. All rights reserved.</p>
//                         <div className="mt-2">
//                             <Link href="#" className="mr-4">Security</Link>
//                             <Link href="#" className="mr-4">Privacy</Link>
//                             <Link href="#">Terms</Link>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }


import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <div className="border border-[#CECEEA] mt-16 ">
            <div className="bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center w-[1150px] transition-all duration-500 ease-in-out max-[1082px]:w-[1040px] max-[1045px]:w-[1010px] mx-auto text-sm p-4">
                <div className="flex items-center justify-center gap-1">
                    <img src="/assets/images/logo-symbol.svg" className="h-5 w-5" alt="" />
                    <span className="font-bold text-xs">The everything app for work.</span>
                </div>
                <div className="flex justify-center items-center gap-3 border-l">
                    <span><BiSupport size={18} /></span>
                    <span className="font-semibold">24/7 support</span>
                </div>
                <div className="flex justify-center items-center gap-3 border-l">
                    <span><AiOutlineThunderbolt size={18} /></span>
                    <span className="font-semibold">Weekly updates</span>
                </div>
                <div className="flex justify-center items-center gap-3 border-l">
                    <span><CiLock /></span>
                    <span className="font-semibold">Secure and compliant</span>
                </div>
                <div className="flex justify-center items-center gap-3 border-l">
                    <span><IoSpeedometerOutline /></span>
                    <span className="font-semibold">99.9% uptime</span>
                </div>
            </div>
            <footer className="bg-[#F8F8FC] border-t border-[#CECEEA]">
                <div className="mx-auto px-4 w-[1150px] transition-all duration-500 ease-in-out max-[1082px]:w-[1040px] max-[1045px]:w-[1010px] p-9">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold mb-2 ml-3">ClickUp</h3>
                            <ul className="space-y-2">
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Download</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">About Us</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Careers</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Customers</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Community</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Affiliate & Referrals</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Reviews</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Press</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Brand</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Product Roadmap</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Status</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 ml-3">Resources</h3>
                            <ul className="space-y-2">
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Help Docs</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">On-Demand Demo</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">ClickUp University</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Webinars</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Events</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Templates</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Import</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">API</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Consultants</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Partners</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 ml-3">Features</h3>
                            <ul className="space-y-2">
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Gantt Chart</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Dashboards</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Native Time Tracking</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Mind Maps</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Automations</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Notepad</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Integrations</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Email</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">To-Do List</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Kanban Board</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Sprints</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 ml-3">Compare</h3>
                            <ul className="space-y-2">
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Monday</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Asana</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Jira</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Trello</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Airtable</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Notion</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Basecamp</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Wrike</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs MS Project</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Todoist</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">vs Smartsheet</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 ml-3">Learn</h3>
                            <ul className="space-y-2">
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Blog</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Software Team Hub</Link></li>
                                <li className="hover:bg-white hover:text-black p-2.5 py-1 rounded-md"><Link href="#">Agency Hub</Link></li>
                            </ul>
                            <h3 className="font-bold mt-6 mb-2">Connect</h3>
                            <div className="flex space-x-4">
                                <Link href="#" className="hover:translate-y-1 transition-transform duration-500">
                                    <ImLinkedin size={24} className="rounded-md text-[#0d1530]" />
                                </Link>
                                <Link href="#" className="hover:translate-y-1 transition-transform duration-500">
                                    <FaFacebookSquare size={24} className="rounded-md text-[#0d1530]" />
                                </Link>
                                <Link href="#" className="hover:translate-y-1 transition-transform duration-500">
                                    <PiInstagramLogoFill size={24} className="rounded-md text-[#0d1530]" />
                                </Link>
                                <Link href="#" className="hover:translate-y-1 transition-transform duration-500">
                                    <FaSquareXTwitter size={24} className="rounded-md text-[#0d1530]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#CECEEA]">
                    <div className="mx-auto flex flex-col sm:flex-row justify-between items-center w-[1150px] transition-all duration-500 ease-in-out max-[1082px]:w-[1040px] max-[1045px]:w-[1010px] p-4">
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
                            <Link href="#" className="mb-2 sm:mb-0">
                                <img
                                    src="/assets/images/app-store-badge-black.svg"
                                    alt="Download on the App Store"
                                    className="h-10"
                                />
                            </Link>
                            <Link href="#" className="mb-2 sm:mb-0">
                                <img
                                    src="/assets/images/google-play-badge-black.svg"
                                    alt="Get it on Google Play"
                                    className="h-10"
                                />
                            </Link>
                            <Link href="#" className="mb-2 sm:mb-0">
                                <img
                                    src="/assets/images/app-store-mac-badge-black.svg"
                                    alt="Download on the Mac App Store"
                                    className="h-10"
                                />
                            </Link>
                            <Link href="#" className="mb-2 sm:mb-0">
                                <img
                                    src="/assets/images/app-store-microsoft-badge-black.svg"
                                    alt="Get it from Microsoft"
                                    className="h-10"
                                />
                            </Link>
                        </div>
                        <div className="text-sm text-gray-600 flex flex-wrap justify-center sm:justify-end items-center">
                            <span className="mr-4">&copy; 2024 ClickUp</span>
                            <Link href="#" className="mr-4 hover:text-gray-900">Security</Link>
                            <Link href="#" className="mr-4 hover:text-gray-900">Privacy</Link>
                            <Link href="#" className="hover:text-gray-900">Terms</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}