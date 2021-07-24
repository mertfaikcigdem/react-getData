async function getData(number) {
  const user = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
  ).json();
  const posts = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
  ).json();
  const data = {
    user,
    posts,
  };
  console.log(data);
}

export default getData;
