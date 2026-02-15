// lib/usersConfig.ts
// Configurare centralizată pentru toți userii

export const USERS = {
    MARIA_POPESCU: {
        id: 1,
        name: "Maria Popescu",
        email: "maria.popescu@email.com",
        avatar: "https://i.pinimg.com/736x/ab/b3/13/abb313a5170c347799e01ea6d3029106.jpg",
        location: "București, România",
        bio: "Passionate reader and book collector. Love classic literature and fantasy novels.",
    },
    ION_IONESCU: {
        id: 2,
        name: "Ion Ionescu",
        email: "ion.ionescu@email.com",
        avatar: "https://i.pravatar.cc/150?img=2",
        location: "Cluj-Napoca, România",
    },
    ANA_GEORGESCU: {
        id: 3,
        name: "Ana Georgescu",
        email: "ana.georgescu@email.com",
        avatar: "https://i.pravatar.cc/150?img=3",
        location: "Timișoara, România",
    },
    MIHAI_DUMITRESCU: {
        id: 4,
        name: "Mihai Dumitrescu",
        email: "mihai.dumitrescu@email.com",
        avatar: "https://i.pravatar.cc/150?img=4",
        location: "Iași, România",
    },
    ELENA_VASILESCU: {
        id: 5,
        name: "Elena Vasilescu",
        email: "elena.vasilescu@email.com",
        avatar: "https://i.pravatar.cc/150?img=5",
        location: "Brașov, România",
    },
};

// Utilizator curent (Maria Popescu)
export const CURRENT_USER = USERS.MARIA_POPESCU;
