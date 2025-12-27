// API service layer - ready for backend integration
// Replace API_BASE_URL with your backend URL when ready

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const api = {
  // Events
  getUpcomingEvents: async () => {
    // Replace with actual API call
    return [
      {
        id: 1,
        title: "General Meeting",
        date: "2025-11-05",
        time: "06:00 AM",
        location: "Beach Road",
        description: "Monthly general meeting",
      },
      {
        id: 2,
        title: "Board Meeting",
        date: "2025-11-12",
        time: "07:00 AM",
        location: "Club House",
        description: "Board members meeting",
      },
    ];
  },

  // Members
  getMembers: async () => {
    // Replace with: fetch(`${API_BASE_URL}/members`)
    return [];
  },

  // Walkers International
  getWalkersInternational: async () => {
    return {
      history: "Walkers International history content...",
      certificates: [],
      bylaws: "Bylaws content...",
      pastPresidents: [],
      team2025: [],
      donations: [],
    };
  },

  // Walkers Club Vizag
  getWalkersClubVizag: async () => {
    return {
      history: "Walkers Club Visakhapatnam history content...",
      certificates: [],
      bylaws: "Bylaws content...",
      pastPresidents: [],
      team2025: [],
      walkersPrayer: "Walkers Prayer text...",
    };
  },

  // Membership
   submitMembership: async (formData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/membership`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Request failed");
    return response.json();
  },
  // Contact
  submitContact: async (data: any) => {
    // Replace with: fetch(`${API_BASE_URL}/contact`, { method: 'POST', body: JSON.stringify(data) })
    console.log("Contact data:", data);
    return { success: true, message: "Message sent successfully" };
  },

  getCoordinators: async () => {
    return [
      {
        name: "Wr. Praveen Kumar Sankhla",
        role: "President",
        address: "12-1-22, 2nd Fl, Above SBI Near Dr.Agarwal Eye Hospital, Visakhaapatnam-530002",
        phone: "+91-9849128428",
        email: "praveensankhla@gmail.com",
      },
      {
        name: "Wr. Maddula Subha",
        role: "Secretary",
        address: "Sohini Towers 50-58-3, Rajendranagar, Visakhapatnam-530016",
        phone: "+91-9848322655",
        email: "subhamaddulaa1@gmail.com",
      },
      {
        name: "Wr. CA. Murali Krishna Sarparapu",
        role: "Secretary",
        address: "Srinivasam plot No.105, Sector-12, MVP Colony, Visakhapatnam 530017",
        phone: "+91-9848323888",
        email: "smk3888@rediffmail.com",
      },
    ];
  },

  // Father of Walkers
  getFatherOfWalkers: async () => {
    return {
      biography: "Biography of the Father of Walkers Movement...",
      images: [],
    };
  },
};
