"use client"
export default function Error({error}){
    return (<main className="error">
        <h1>Something went wrong!</h1>
        <p>We could not upload your meal. Please try again.</p>
    </main>);
}