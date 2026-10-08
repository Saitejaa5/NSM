export interface Location {
  id: string;
  branchNo: string;
  name: string;
  shortName: string;
  address: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  rating: number;
  reviewCount: number;
  mapsUrl: string;
  landmark: string;
}

const q = (s: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s)}`;

export const PHONE_DISPLAY = "073828 89479";
export const PHONE_HREF = "tel:+917382889479";

export const locations: Location[] = [
  {
    id: "kvr-valley",
    branchNo: "01",
    name: "North East Momos",
    shortName: "KVR Valley",
    address:
      "KVR Valley, Bake House 15, Road No. 1, opposite Praneeth Daffodils, Mallampet, Hyderabad, Telangana 500043",
    addressLines: [
      "KVR Valley, Bake House 15,",
      "Road No. 1,",
      "Opposite Praneeth Daffodils,",
      "Mallampet, Hyderabad,",
      "Telangana 500043",
    ],
    phone: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    rating: 5.0,
    reviewCount: 3,
    mapsUrl: q(
      "North East Momos, KVR Valley, Bake House 15, Road No. 1, opposite Praneeth Daffodils, Mallampet, Hyderabad, Telangana 500043"
    ),
    landmark: "Opposite Praneeth Daffodils",
  },
  {
    id: "saibalaji-enclave",
    branchNo: "02",
    name: "North East Momos",
    shortName: "Saibalaji Enclave",
    address:
      "Saibalaji Enclave, SRI, Road No. 1, near Lakshya Food Court, Mallampet, Hyderabad, Telangana 500118",
    addressLines: [
      "Saibalaji Enclave, SRI,",
      "Road No. 1,",
      "Near Lakshya Food Court,",
      "Mallampet, Hyderabad,",
      "Telangana 500118",
    ],
    phone: PHONE_DISPLAY,
    phoneHref: PHONE_HREF,
    rating: 5.0,
    reviewCount: 1,
    mapsUrl: q(
      "North East Momos, Saibalaji Enclave, SRI, Road No. 1, near Lakshya Food Court, Mallampet, Hyderabad, Telangana 500118"
    ),
    landmark: "Near Lakshya Food Court",
  },
];
