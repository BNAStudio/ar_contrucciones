import img1 from "../assets/banner/img1.png";
import img2 from "../assets/banner/img2.jpg";
import img3 from "../assets/banner/img3.jpg";
import npImg1 from "../assets/newProjects/npImg1.jpg";
import npImg2 from "../assets/newProjects/npImg2.jpg";
import npImg3 from "../assets/newProjects/npImg3.jpg";

export type VariantsType = Record<string, string>;
export type NewProjectInfoType = {
    releasesDate: string;
    location: string;
    locationNick: string;
    vis: boolean;
    areaFrom: string;
    areaTo: string;
    path: string;
};

export const variants: VariantsType = {
    bannerTitle: "Nuestros proyectos destacados",
    bannerSubtitle: "Nos hemos esforzado por crear espacios únicos, innovadores y funcionales, para brindarte una experiencia de vida excepcional.",
    cardFillBtn: "Ver detalles",
    CardBorderBtn: "Cotiza y separa"
}

export const cardData: VariantsType[] = [
    {
        location: "SANTA MARTA",
        title: "RESERVA DEL MAR BELLO HORIZONTE",
        amountMin: "$416.499.000",
        amountMax: "$483.999.000",
        areaMin: "35",
        areaMax: "37",
        imgPath: img1
    },
    {
        location: "CHIA",
        title: "RESERVA DE CHÍA - ETAPA 1",
        amountMin: "191.999.000",
        amountMax: "191.999.000",
        areaMin: "30",
        areaMax: "30,5",
        imgPath: img2
    },
    {
        location: "MOSQUERA",
        title: "ACANTO 2 - ETAPA 2",
        amountMin: "191.100.000",
        amountMax: "203.999.000",
        areaMin: "38,5",
        areaMax: "45,5",
        imgPath: img3
    }
]

export const newProjectsInfo: NewProjectInfoType[] = [
    {
        releasesDate: "Mayo 24",
        location: "Cartagena - Zona Manzanillo",
        locationNick: "Playa Escondida",
        vis: false,
        areaFrom: "47",
        areaTo: "163",
        path: npImg1
    },
    {
        releasesDate: "Diciembre 2023",
        location: "Santa Marta",
        locationNick: "Reserva del Mar Puerto Gaira",
        vis: true,
        areaFrom: "35",
        areaTo: "225,5",
        path: npImg2
    },
    {
        releasesDate: "Diciembre 2023",
        location: "Girardot - Cundinamarca",
        locationNick: "Girardot Reservado",
        vis: false,
        areaFrom: "44",
        areaTo: "51",
        path: npImg3
    }
]