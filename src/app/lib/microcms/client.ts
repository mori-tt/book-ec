import { createClient } from "microcms-js-sdk";
import { BookType } from "../../types/types";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBooks = async () => {
  const allBooks = await client.getList<BookType>({
    endpoint: "book-ec",
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
  });
  return allBooks;
};

export const getDetailBook = async (contentId: string) => {
  const detailBook = await client.getListDetail<BookType>({
    endpoint: "book-ec",
    contentId,
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
  });
  return detailBook;
};
