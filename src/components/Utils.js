// dateUtils.js
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatPublishedDate = (publishedAt) => {
  return format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });
};

export const formatPublishedDateRelativeToNow = (publishedAt) => {
  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
};