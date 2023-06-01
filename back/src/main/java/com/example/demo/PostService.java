package com.example.demo;

import java.util.ArrayList;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
@Transactional
public class PostService {
    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // CRUD methods (create, read, update, delete)
    public Post save(Post post) {
        return postRepository.save(post);
    }

    public List<Post> findAll() {
        Sort sort = Sort.by(Sort.Direction.DESC, "postID"); // ID를 내림차순으로 정렬
        return postRepository.findAll(sort);
    }

    public Post findById(int id) {
        return postRepository.findById(id).orElse(null);
    }

    public List<Post> findByName(String name) {return postRepository.findByName(name);
    }

    public List<Post> findByCategory(int categoryID) {
        List<Post> result = new ArrayList<>();
        for(Post post: findAll()){
            if(post.getCategory().getCategoryID() == categoryID){
                result.add(post);
            }
        }
        return result;
    }
    public List<Post> findByTitleContent(String text){
        List<Post> result = new ArrayList<>();
        List<Post> allPosts = findAll(); // Retrieve all posts from the repository
        for (Post post : allPosts) {
            if (post.getPostTitle().contains(text) || post.getPostContent().contains(text)) {
                result.add(post);
            }
        }
        return result;
    }

    public Post update(Post post) {
        return postRepository.save(post);
    }

    public void deleteById(int id) {
        postRepository.deleteById(id);
    }
}
