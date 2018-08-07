package pl.coderslab.model;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemoryBookService {

    private List<Book> list;

    public MemoryBookService() {
        list = new ArrayList<>();
        list.add(new Book(1L, "9788324631766", "Thinking in Java", "Bruce Eckel",
                "Helion", "programming"));
        list.add(new Book(2L, "9788324627738", "Rusz glowa, Java.",
                "Sierra Kathy, Bates Bert", "Helion", "programming"));
        list.add(new Book(3L, "9780130819338", "Java 2. Podstawy",
                "Cay Horstmann, Gary Cornell", "Helion", "programming"));
    }

    public List<Book> getList() {
        return list;
    }

    public void setList(List<Book> list) {
        this.list = list;
    }

    public Book getBookById(long id) {
        for (Book book : getList()) {
            if (book.getId() == id) {
                return book;
            }
        }return null;
    }


    public void deleteBookById(long id){
        getList().remove(getBookById(id));
    }

    public void updateBook(Book book){
        getList().remove(getBookById(book.getId()));
        getList().add(book);

    }

    public long getLastId(){
        long lastId = 0;
        Book book = getList().get(list.size()-1);
        lastId = book.getId();
        return lastId;
    }


}
