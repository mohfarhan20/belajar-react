function Tweet({cek}){
    return (
        <h2> {!cek?"before state":cek}</h2>
    )
}
export default Tweet;