package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // CRUD endpoints (POST, GET, PUT, DELETE)
    @PostMapping("/create")
    public User create(@ModelAttribute User user) {
        return userService.save(user);
    }

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable int id) {
        return userService.findById(id);
    }

    @GetMapping("/check/{userID}/{password}")
    public User checkUserInfo(@PathVariable(value = "userID") String userID,
        @PathVariable(value = "password") String password) {
        System.out.println("id : " + userID + " password : " + password);
        return userService.checkUserInfo(userID, password);
    }

    @GetMapping("/check/{userID}")
    public User checkId(@PathVariable String userID) {
        System.out.println("id : " + userID);
        return userService.checkId(userID);
    }

    @PutMapping("/{id}")
    public User update(@PathVariable int id, @ModelAttribute User user) {
        user.setUserTableID(id);
        return userService.update(user);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id) {
        userService.deleteById(id);
    }


    @GetMapping("/{id}/favorite-posts")
    public List<Integer> getFavoritePostIds(@PathVariable int id) {
        return userService.getFavoritePostIds(id);
    }

    @PostMapping("/{id}/favorite-posts/{postId}")
    public User addFavoritePostId(@PathVariable int id, @PathVariable int postId) {
        return userService.addFavoritePostId(id, postId);
    }

    @DeleteMapping("/{id}/favorite-posts/{postId}")
    public User removeFavoritePostId(@PathVariable int id, @PathVariable int postId) {
        return userService.removeFavoritePostId(id, postId);
    }
}
