import { groq } from "next-sanity";

const groqQuery = groq`[_type == page && slug.current == "/"]{
 _type,
 
}`