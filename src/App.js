import React,{ useState } from "react";
import BookTable from "./BookTable";
import FormPage from "./FormPage";
import "./design.css";

function App() {
	const [page,setPage]=useState("table");
	const [books,setBooks]=useState([]);
	//I dunno if we'll be needing above line 
	const handleAddBook=(newBook)=>{
		setBooks((prev)=>[...prev,newBook]);
		setPage("table");
	};
	return (
		<div>
			{page==="table"?(
				<BookTable books={books} onAddClick={()=>
				setPage("form")}/>
				):(
					<FormPage onSubmit={handleAddBook} onCancel={()=>
					setPage("table")}/>
				
			)}
		</div>
	);
	
}
export default App;
