import './App.css'
import ImageUploader from './components/ImageUploader'
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json"
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-4">
      <Authenticator className="max-w-md w-full">
        {({ signOut, user }) => (
          <main className="bg-gray-900 rounded-xl shadow-xl p-8 flex flex-col gap-6 text-white">
            <header className="text-center">
              <h1 className="text-3xl font-bold mb-2">Welcome to the Image Resizer App</h1>
              <p className="mb-1">This app allows you to resize images easily.</p>
              <p>Feel free to upload and resize your images.</p>
            </header>

            <section className='w-[80vw]'>
              <ImageUploader />
            </section>

            <button onClick={signOut} className="mt-4 px-4 py-2 bg-indigo-700 rounded hover:bg-indigo-800">
              Sign out
            </button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}


export default App



