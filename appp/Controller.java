package com.example.quizapp;

import com.example.quizapp.Model.QuestionModel;
import com.example.quizapp.Model.QuizModel;
import com.example.quizapp.Repository.QuizQuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
@org.springframework.web.bind.annotation.RestController
@RequestMapping(value="/quizapp")
public class Controller {
 @Autowired
 QuizQuestionRepo quizRepository;
 @GetMapping(value="/allQuestion")
    public Iterable<QuestionModel> all_data(){
     return quizRepository.findAll();
 }
 @PatchMapping(value="/load")
    public Iterable<QuestionModel> persis(@RequestBody QuizModel quiz){
  return  quizRepository.findAll();
 }
}
