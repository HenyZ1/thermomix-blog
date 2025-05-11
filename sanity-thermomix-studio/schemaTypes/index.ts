import author from './author'; // Varsayılan export, doğru
import blockContent from './blockContent'; // Varsayılan export, doğru
import category from './category'; // Varsayılan export, doğru
import { postType } from './post'; // Adlandırılmış export, düzeltildi
import { productType } from './productTypes'; // Adlandırılmış export, düzeltildi

export const schemaTypes = [postType, author, category, blockContent, productType];