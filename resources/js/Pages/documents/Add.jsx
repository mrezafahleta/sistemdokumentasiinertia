import Button from '@/Components/Button';
import Header from '@/Components/Header';
import Backend from '@/Layouts/Backend';
import {Head, useForm} from '@inertiajs/inertia-react'

export default function Add() {

    const {data, setData, post, processing, errors} = useForm({
      title: "",
      description: "",
    })

    const submit = (e) => { 
      e.preventDefault();
      post(route('store-document'));
    }

  return (
      <>
          <Head title="Add Document" />
          <Header title="Add Document" />
          <div className="bg-white w-full overflow-x-auto p-5 shadow-lg rounded-md">
              <form onSubmit={submit}>
                  <div className="mb-5">
                      <label
                          for="about"
                          class="block text-sm font-medium text-gray-700"
                      >
                          Title
                      </label>
                      <input
                          value={data.title}
                          onChange={(e) => setData("title", e.target.value)}
                          placeholder="Masukkan title..."
                          type="text"
                          name="title"
                          autocomplete="title"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.title && (
                          <p className="text-red-500 text-sm mt-1">
                              {errors.title}
                          </p>
                      )}
                  </div>
                  <div>
                      <label
                          for="about"
                          class="block text-sm font-medium text-gray-700"
                      >
                          Deskripsi
                      </label>
                      <div class="mt-1">
                          <textarea
                              value={data.description}
                              onChange={(e) =>
                                  setData("description", e.target.value)
                              }
                              id="description"
                              name="description"
                              rows="3"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="Masukkan deskripsi..."
                          ></textarea>
                      </div>
                      {errors.description && (
                          <p className="text-red-500 text-sm mt-1">
                              {errors.description}
                          </p>
                      )}
                  </div>
                  <Button
                      type="submit"
                      className="mt-5 w-full flex justify-center"
                  >
                      Simpan Document
                  </Button>
              </form>
          </div>
      </>
  );
}


Add.layout = (page) => <Backend  children={page}/>