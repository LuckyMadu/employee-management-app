import { COLORS } from "@/lib/constants/colors";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Card = () => {
  return (
    <div className="flex m-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
            Lahiru Amaratunga
          </h5>
          <div className="">
            <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="text-gray-500 dark:text-gray-400">Email</dt>
                <dd className="font-semibold">yourname@flowbite.com</dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="text-gray-500 dark:text-gray-400">Gender</dt>
                <dd className="font-semibold">M</dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="text-gray-500 dark:text-gray-400">
                  Phone number
                </dt>
                <dd className="font-semibold">+00 123 456 789</dd>
              </div>
            </dl>
          </div>
          <div className="flex items-center justify-end mt-2">
            <button
              type="button"
              className="inline-block mr-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add Employee
            </button>
            <RiDeleteBin5Fill size={26} color={COLORS.RED} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
