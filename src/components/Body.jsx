function Body({ list, handleCheck, handleDelete }) {
  return (
    <main className="body">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Fee Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.sname}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.fee}
                  onChange={() => handleCheck(student.id)}
                />
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Body




































































