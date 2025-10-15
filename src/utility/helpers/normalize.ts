export const normalize = (s?: string | null) => 
   (s ?? "").toString().trim().toLowerCase()