package pl.coderslab.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.model.Book;
import pl.coderslab.model.MemoryBookService;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    MemoryBookService memoryBookService;


    @RequestMapping("/hello")
    public String hello(){
        return "{hello: World}";
    }


    @RequestMapping("/helloBook")
    public Book helloBook(){
        return new Book(1L,"9788324631766","Thinking in Java",
                "Bruce Eckel","Helion","programming");
    }


    @GetMapping("")
    public List<Book> listBook() {
        memoryBookService.getList().sort( (b1,b2) -> (int)(b1.getId() - b2.getId()));
        return memoryBookService.getList();
    }

    @PostMapping("")
    public void addBook(@RequestBody Book book){
        book.setId(memoryBookService.getLastId()+1);
        memoryBookService.getList().add(book);
    }

    @PutMapping("/{id}")
    public void editBook(@RequestBody Book book, @PathVariable long id){
        book.setId(id);
        memoryBookService.updateBook(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable long id){
        memoryBookService.deleteBookById(id);
    }


}

