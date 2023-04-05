export interface User {
    id: number;
    name: string;
    ap_paterno: string;
    ap_materno: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone_number: string;
    active?: number;
    rol_id: number;
    rol?: string;
    codigo?: number;
}