import './App.css'
import ImageUploader from './components/ImageUploader'

function App() {

  return (
   <>
    <div className="min-h-screen w-[100vw] bg-gradient-to-br  flex items-center justify-center p-4">
    <main className=" bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full p-8 flex flex-col gap-6">
            <header className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Welcome to the Image Resizer App
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                This app allows you to resize images easily.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to upload and resize your images.
              </p>
            </header>

            <section>
              <ImageUploader />
            </section>

            
             
          </main>
    </div>
   </>
  )
}

export default App
