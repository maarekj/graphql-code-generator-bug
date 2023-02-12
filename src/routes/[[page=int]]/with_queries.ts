import {graphql} from "../../generated/gql";

const document = graphql(`
    query MyPokedexQuery {
        Pokedex {
            id
            name
        }
    }
`);