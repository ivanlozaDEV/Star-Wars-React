const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorites: [],
      apiUrl: "https://swapi.dev/api",
    },
    actions: {
      getCharacters: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/people/`);
          if (!response.ok) {
            throw new Error("There has been an error");
          }
          const data = await response.json();
          console.log(data);

          setStore({ characters: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/planets/`);
          if (!response.ok) {
            throw new Error("There has been an error");
          }
          const data = await response.json();
          console.log(data);

          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getVehicles: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/vehicles/`);
          if (!response.ok) {
            throw new Error("There has been an error");
          }
          const data = await response.json();
          console.log(data);

          setStore({ vehicles: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      addFavorites: (item) => {
        const store = getStore();
        let newItem;

        if (item.url.includes("/people/")) {
          newItem = {
            type: "character",
            name: item.name,
            id: item.url.split("/")[5],
          };
        } else if (item.url.includes("/planets/")) {
          newItem = {
            type: "planet",
            name: item.name,
            id: item.url.split("/")[5],
          };
        } else if (item.url.includes("/vehicles/")) {
          const id = store.favorites.length + 1; // Generate a simple unique id
          newItem = { type: "vehicle", name: item.name, id: id.toString() }; // Convert id to string
        } else {
          console.error("Unsupported item type:", item);
          return;
        }

        setStore({
          favorites: [...store.favorites, newItem],
        });

        console.log(store.favorites);
      },
    },
  };
};

export default getState;
