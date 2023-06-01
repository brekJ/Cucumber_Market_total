package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    // CRUD endpoints (POST, GET, PUT, DELETE)
    @PostMapping("/create")
    public Post create(@ModelAttribute Post post) {
        return postService.save(post);
    }

    @GetMapping
    public List<Post> findAll() {
        return postService.findAll();
    }

    @GetMapping("/{id}")
    public Post findById(@PathVariable int id) {
        return postService.findById(id);
    }

    @GetMapping("/search/{name}")
    public List<Post> findByName(@PathVariable String name) {
        return postService.findByName(name);
    }

    @GetMapping("/search/category/{categoryID}")
    public List<Post> findByCategory(@PathVariable int categoryID) {
        return postService.findByCategory(categoryID);
    }

    @GetMapping("/search/titlecontent/{text}")
    public List<Post> findByTitleContent(@PathVariable String text) {
        return postService.findByTitleContent(text);
    }


    @PutMapping("/{id}")
    public Post update(@PathVariable int id, @ModelAttribute Post post) {
        post.setPostID(id);
        return postService.update(post);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id) {
        postService.deleteById(id);
    }
}
