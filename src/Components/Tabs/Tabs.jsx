import { useState } from "react";
import './Tabs.css'


const Tabs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tabs = ['Product Details', 'Return Policy', 'Reviews']
    return (
        <div className="space-y-10">
            <div className="flex">
                {
                    tabs.map((tab, index) => <div
                        key={index}
                        className={`mr-3 font-semibold py-1 rounded cursor-pointer relative after:absolute after:h-1 after:w-0 after:bg-[#3586FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${tabs[currentIndex] === tab && 'after:w-full'}`}
                        onClick={() => setCurrentIndex(index)}
                    >{tab}</div>)
                }
            </div>
            {
                currentIndex === 0 &&
                <div>
                    <table className="border-collapse w-full sm:w-1/2 sizes">
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Chest</th>
                                <th>Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>M</td>
                                <td>38, 40</td>
                                <td>27.5</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>42</td>
                                <td>28.5</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>44</td>
                                <td>29</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
            {
                currentIndex === 1 &&
                <ul className="list-decimal space-y-3">
                    <li>
                        <span className="font-bold">30-Day Return Window:</span> Customers can return items within 30 days of purchase for a full refund or exchange.
                    </li>
                    <li>
                        <span className="font-bold">Unused and Unopened Items:</span> Items must be returned unused, unopened, and in their original packaging to be eligible for a refund or exchange.
                    </li>
                    <li>
                        <span className="font-bold">Proof of Purchase:</span> Customers must provide proof of purchase, such as a receipt or order confirmation, when returning items.
                    </li>
                    <li>
                        <span className="font-bold">Refund Method:</span> Refunds will be issued using the original payment method used for the purchase.
                    </li>
                    <li>
                        <span className="font-bold">Return Shipping:</span> Customers are responsible for return shipping costs unless the item received is damaged, defective, or incorrect.
                    </li>
                    <li>
                        <span className="font-bold">Exceptions:</span> Some items, such as personalized or perishable goods, may not be eligible for returns. Special conditions may apply to certain product categories.
                    </li>
                </ul>
            }
            {
                currentIndex === 2 && 
                <p className="text-red-500 py-6">No Reviews Yet</p>
            }
        </div>
    );
};

export default Tabs;