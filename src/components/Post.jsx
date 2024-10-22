export function Post ({author, content}) {
    return (
        <>
        <h1 style={{color: '#ffffff'}}>{author}</h1>
        <p>{content}</p>
        </>

    );
}