export interface Review {
  text: string;
  author: string;
  rating: number;
  branch: string;
}

export const reviews: Review[] = [
  {
    text: "Very very good 👍 I love North East momos …",
    author: "Susmita Mech",
    rating: 5,
    branch: "KVR Valley",
  },
  {
    text: "Awesome momo and Soya is best",
    author: "Shubham Sinha",
    rating: 5,
    branch: "KVR Valley",
  },
  {
    text: "Very nice items ☺️ All are home made and satnny is so tasty 😋",
    author: "Susmita Mech",
    rating: 5,
    branch: "KVR Valley · Saibalaji Enclave",
  },
];
