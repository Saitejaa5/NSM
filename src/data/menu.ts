export interface MenuItem {
  name: string;
  description: string;
  price: number | null; // null = to be confirmed by owner
  image: string;
  veg: boolean;
  tag?: string;
  confirmed?: boolean;
}

export interface MenuCategory {
  category: string;
  note: string;
  items: MenuItem[];
}

export const menuImage = {
  kurkuri:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  steamed:
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80",
  steamer:
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
  plate:
    "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
  noodles:
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
  curry:
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
};

export const menu: MenuCategory[] = [
  {
    category: "Kurkuri Momos",
    note: "Confirmed house favourite",
    items: [
      {
        name: "Veg Kurkuri Momos",
        description:
          "Crispy, golden and packed with flavour — a crunchy take on the classic momo.",
        price: null,
        image: menuImage.kurkuri,
        veg: true,
        tag: "Signature",
        confirmed: true,
      },
    ],
  },
  {
    category: "Steamed Momos",
    note: "Category — dishes to be confirmed",
    items: [
      {
        name: "Classic Steamed Momos",
        description:
          "Soft, delicate pleats served piping hot with homemade chutney. Full dish list coming soon.",
        price: null,
        image: menuImage.steamed,
        veg: true,
        confirmed: false,
      },
    ],
  },
  {
    category: "Soya Specials",
    note: "Category — dishes to be confirmed",
    items: [
      {
        name: "Soya Chaap Specials",
        description:
          "Loved by reviewers — juicy soya preparations with bold, homely masalas. Menu updating soon.",
        price: null,
        image: menuImage.curry,
        veg: true,
        tag: "Reviewer favourite",
        confirmed: false,
      },
    ],
  },
  {
    category: "North-Eastern Favourites",
    note: "Category — dishes to be confirmed",
    items: [
      {
        name: "North-Eastern Plates",
        description:
          "Comforting North-Eastern inspired snacks and sides. Ask in-store for today's specials.",
        price: null,
        image: menuImage.noodles,
        veg: true,
        confirmed: false,
      },
    ],
  },
  {
    category: "Homemade Specials",
    note: "Category — dishes to be confirmed",
    items: [
      {
        name: "Homemade Chutneys & Sides",
        description:
          "Fresh chutneys made in-house daily — the taste reviewers keep mentioning.",
        price: null,
        image: menuImage.plate,
        veg: true,
        confirmed: false,
      },
    ],
  },
];
