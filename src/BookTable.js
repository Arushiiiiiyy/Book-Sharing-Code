import React from "react";

function BookTable({books,onAddClick}){
	return (
		<>
			<div id="top_strip">
				<p>IIIT-H</p>
				<div id="buttony">
				          <button onClick={onAddClick}>Add a Book!</button>
				</div>
			</div>
			<table border="2"> 
				<col style={{ width: "100px" }} />
			    <col style={{ width: "400px" }} />
			    <col style={{ width: "400px" }} />
			    <col style={{ width: "400px" }} />
			    <col style={{ width: "200px" }} />
			     <thead>
			          <tr>
			            <th>S. no</th>
			            <th>Book name</th>
			            <th>Author</th>
			            <th>Edition</th>
			            <th>Available</th>
			          </tr>
			     </thead>
			     <tbody>
			     	{books.map((book,idx)=>(
			     		<tr key={idx}>
			     			<td>{idx+1}</td>
			     			<td>{book.bookname}</td>
			     			<td>{book.author}</td>
			     			<td>{book.edition}</td>
			     			<td>{book.available}</td>
			     		</tr>
			     	))}
			     </tbody>
			</table>
		</>
	);
}

export default BookTable;
