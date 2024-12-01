function Form({handleSubmit, onChange}) {
    return (
        <form onSubmit={handleSubmit}>
        <label> Enter the pokemon name: 
            <input type="text" onChange={onChange}/>
            <input type="submit"/>
        </label>
        </form>
    )
}

export default Form; 