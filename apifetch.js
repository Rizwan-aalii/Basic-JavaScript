async function getData() {
    const url = "https://api.github.com/users/hiteshchoudhary";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

//   const response = await fetch("https://example.org/post", {
//     method: "POST",
//     // ...
//   });

  const response = await fetch("https://example.org/post", {
    body: JSON.stringify({ username: "example" }),
    // ...
  });
  