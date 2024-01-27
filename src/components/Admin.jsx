import React from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'

function Admin() {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <div className="flex-grow w-[98%] m-auto bg-white my-2 p-2">
        <table className="w-full">
        
          <tbody>
            <tr className="bg-gray-200">
              <td className="text-center">
                <div className="bg-gray-400 h-12 w-12 rounded-full object-cover overflow-hidden">
                  <img
                    className="h-full w-full"
                    src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td className="text-center">Seller Name</td>
              <td className="text-center">Seller Product Name</td>
              <td className="text-center">Seller Model 306</td>
              <td className="text-center">Seller District</td>
              <td className="text-center"><button className='px-5 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-600'>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Admin