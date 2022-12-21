import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/product/action";
import { useEffect, useState } from "react";
import { cartDecrement, cartIncrement } from "./redux/cart/action";

function App() {
  const count1 = useSelector((state) => state.product.product1.amount);
  const count2 = useSelector((state) => state.product.product2.amount);
  const count3 = useSelector((state) => state.product.product3.amount);
  const cart1 = useSelector((state) => state.cart.product1.amount);
  const cart2 = useSelector((state) => state.cart.product2.amount);
  const cart3 = useSelector((state) => state.cart.product3.amount);
  const cart1price = useSelector((state) => state.cart.product1.price);
  const cart2price = useSelector((state) => state.cart.product2.price);
  const cart3price = useSelector((state) => state.cart.product3.price);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  console.log(cart1);
  const decrementHandler = (value) => {
    console.log(count1);
    console.log(count2);
    console.log(count3);

    if (eval(`count${value}`) < 1) {
      alert("Don't Have Sufficient Product");
      return;
    }
    dispatch(decrement(value));
    dispatch(cartIncrement(value));
  };
  const incrementHandler = (value) => {
    if (eval(`cart${value}`) <= 0) {
      alert("Haven't Add any Product");
      return;
    }
    dispatch(increment(value));
    dispatch(cartDecrement(value));
  };
  useEffect(() => {
    setTotalItem(cart1 + cart2 + cart3);
    setTotalPrice(cart1 * cart1price + cart2 * cart2price + cart3 * cart3price);
  }, [decrementHandler, incrementHandler]);

  return (
    <div class="bg-gray-50 h-full md:h-screen">
      <div class="grid place-items-center">
        <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
          <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-between px-4 items-center">
              <div class="text-lg font-semibold">
                <p>Asus Vivobook X515MA ({count1})</p>
                <p class="text-gray-400 text-base">Tk 35,500</p>
              </div>
              <div class="text-lg font-semibold">
                <button
                  onClick={() => decrementHandler(1)}
                  class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-between px-4 items-center">
              <div class="text-lg font-semibold">
                <p>Dell E1916HV 18.5 Inch ({count2})</p>
                <p class="text-gray-400 text-base">Tk 9,300</p>
              </div>
              <div class="text-lg font-semibold">
                <button
                  onClick={() => decrementHandler(2)}
                  class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-between px-4 items-center">
              <div class="text-lg font-semibold">
                <p>Canon Eos 4000D 18MP ({count3})</p>
                <p class="text-gray-400 text-base">Tk 36,500</p>
              </div>
              <div class="text-lg font-semibold">
                <button
                  onClick={() => decrementHandler(3)}
                  class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-between border-b-2 mb-2">
              <div class="text-lg py-2">
                <p>Asus Vivobook X515MA</p>
              </div>
              <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    onClick={() => incrementHandler(1)}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{cart1}</p>
                  <button
                    onClick={() => decrementHandler(1)}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex justify-between border-b-2 mb-2">
              <div class="text-lg py-2">
                <p>Dell E1916HV 18.5 Inch</p>
              </div>
              <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    onClick={() => incrementHandler(2)}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{cart2}</p>
                  <button
                    onClick={() => decrementHandler(2)}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex justify-between border-b-2 mb-2">
              <div class="text-lg py-2">
                <p>Canon Eos 4000D 18MP</p>
              </div>
              <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    onClick={() => incrementHandler(3)}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{cart3}</p>
                  <button
                    onClick={() => decrementHandler(3)}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Item</p>
                <p class="text-5xl">{totalItem}</p>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div class="flex justify-center items-center text-center">
              <div class="text-xl font-semibold">
                <p>Total Price</p>
                <p class="text-5xl">{totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
