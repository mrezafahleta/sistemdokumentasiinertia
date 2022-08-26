import Alert from "@/Components/Alert";
import Anchor from "@/Components/Anchor";
import Header from "@/Components/Header";
import Backend from "@/Layouts/Backend";
import { Head, usePage, Link } from "@inertiajs/inertia-react";


export default function Table({ documents }) {
    const {flash} = usePage().props;
   function createMark(data) {
       return { __html: _.unescape(data) };
   }

    return (
        <div className="max-w-full relative">
            
                

            <Head title="Document" />
            <Header title="Document Table" />
            <div className="relative w-full bg-white shadow-lg overflow-x-auto  rounded-md p-5">
                <div className="flex justify-between">
                    <Anchor href="add-document" className="">
                        Add Document
                    </Anchor>

                   
                   
                    <div>
                        <input
                            type="text"
                            className="rounded-md"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <table className="w-full divide-y divide-gray-200 rounded-md overflow-hidden ">
                    <thead className="overflow-hidden">
                        <tr className="text-gray-500">
                            <th className="w-96  text-start font-semibold  text-sm uppercase  px-6 py-5">
                                Title
                            </th>
                            <th className=" text-start font-semibold  text-sm uppercase  px-6 py-5">
                                Description
                            </th>
                            <th className="  text-start font-semibold  text-sm uppercase  px-6 py-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {documents.data.map((document) => {
                            return (
                                <tr key={document.id}>
                                    <td className="px-6 py-2 text-sm  ">
                                        {document.title.length > 100
                                            ? `${document.title.substring(
                                                  0,
                                                  99
                                              )}...`
                                            : document.title}
                                    </td>
                                    <td className="px-6 py-2 text-sm ">
                                        {document.description.length > 100
                                            ? `${document.description.substring(
                                                  0,
                                                  90
                                              )}...`
                                            : document.description}
                                    </td>
                                    <td className="px-6 py-2 text-center flex space-x-2">
                                        <button className="bg-blue-300 hover:bg-blue-500 text-white  px-4 py-2 rounded-md">
                                            DETAIL
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-400 text-white  px-4 py-2 rounded-md">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="block md:flex w-full justify-between  md:overflow-hidden items-center  mt-10">
                    <p className="text-center md:text-start">
                        Showing{" "}
                        <span className="font-bold">{documents.from}</span> to{" "}
                        <span className="font-bold">{documents.to}</span> of{" "}
                        <span className="font-bold">{documents.total}</span>
                    </p>

                    <div className="flex">
                        {documents.links.map((item, index) => (
                            <Link
                                className={`${
                                    item.active == true
                                        ? "bg-blue-500 text-white"
                                        : ""
                                } hover:bg-blue-500 hover:text-white px-2 py-1 space-x-1  focus:outline-none md:px-3 md:py-1 rounded-lg flex items-center justify-center  `}
                                key={index}
                                preserveScroll={true}
                                href={item.url}
                                disabled={item.url == null ? true : false}
                            >
                                <div
                                    dangerouslySetInnerHTML={createMark(
                                        item.label
                                    )}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Table.layout = (page) => <Backend children={page} />;
