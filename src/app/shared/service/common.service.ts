export interface IHMO{
    id?: number;
    hmoNumber?: string;
    name: string;
    description?:string;
    address: string;
    telephoneNumber: string;
    email: string;    
    website?: string;
    hmoStatus?: boolean;
}

export interface ICompany{
    id?: number;    
    companyNumber?: string;
    name: string;
    description?: string;
    address: string;
    telephoneNumber: string;
    email: string;    
    website?: string;
    contactPhoneNumber?: string;
    contactEmail?: string;
}

export interface IHospital{
    id?: number;
    hospitalNumber?: string;
    name: string;
    description?: string;
    address: string;
    telephoneNumber: string;
    email: string;
    website?: string;
    contactPhoneNumber?: string;
    contactEmail?: string;    
}