package com.yedam.myserver.todo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yedam.myserver.todo.mapper.TodoMapper;
import com.yedam.myserver.todo.service.TodoService;
import com.yedam.myserver.todo.vo.TodoVO;

@Service
public class TodoServiceImpl implements TodoService{
	
	@Autowired TodoMapper mapper; // mybatis가 todomapper 인터페이스에 dao를 다 생성해 둠. dao가 만들어진 todomapper를 autowired

	@Override
	public List<TodoVO> findAll() {
		return mapper.findAll();
	}

	@Override
	@Transactional // 메서드가 포함하고 있는 작업 중에 하나라도 실패할 경우 전체 작업을 롤백하는 기능
	public void persist(TodoVO vo) {
		mapper.persist(vo);	// autocommit
		//mapper.persist(vo); // error -> rollback
	}

	@Override
	public void merge(TodoVO vo) {
		mapper.merge(vo);
	}

	@Override
	public void remove(TodoVO vo) {
		mapper.remove(vo);
	}

}
