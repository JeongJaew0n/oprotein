import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
  } from 'react-hook-form';
import React, { useState } from 'react';
  
  /** 폼 데이터 정의 */
  interface FormData {
    name: string;
    email: string;
    newPassword: string;
    retypePassword: string;
    nation: string;
    acceptTos: boolean;
  }
  
  /** 폼 컴포넌트 */
  const FormExample = () => {
    const [ count, setCount ] = useState<number>();
    let values = useFetch("/api");;
    
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      values,
      defaultValues: {
        name: '미리 입력된 데이터',
        email: 'hello@aa.aa'
      }
    });
  
    // 제출 성공 이벤트 핸들러 함수
    const handleSuccess: SubmitHandler<FormData> = (data) => {
      console.log('입력 데이터', data)
    };
  
    // 제출 실패 이벤트 핸들러 함수
    const handleError: SubmitErrorHandler<FormData> = (error) => {
      console.log('에러 데이터', error)
    };
  
    return (
      <form className="form-container" onSubmit={handleSubmit(handleSuccess, handleError)}>
        <h2>회원가입</h2>
        <div className="input-container">
          <label htmlFor="name">이름: </label>
          <input type="text" {...register('name', {required: '이름을 입력하라고!!'})} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
  
        <div className="input-container">
          <label htmlFor="nation">국적: </label>
          <select {...register('nation')}>
            <option value="ko">대한민국</option>
            <option value="zh">중국</option>
            <option value="ja">일본</option>
          </select>
        </div>
  
        <div className="input-container">
          <label htmlFor="email">이메일: </label>
          <input type="email" {...register('email')} />
        </div>
  
        <div className="input-container">
          <label htmlFor="email">패스워드: </label>
          <input type="password" {...register('newPassword')} />
        </div>
  
        <div className="input-container">
          <label htmlFor="email">패스워드 재입력: </label>
          <input type="password" {...register('retypePassword')} />
        </div>
  
        <div className="input-container">
          <label htmlFor="email">서비스 이용약관에 동의합니다 </label>
          <input type="checkbox" {...register('acceptTos')} />
        </div>
  
        <div className="button-container column">
          <button type="submit">회원가입</button>
        </div>
      </form>
    );
  };
  
  export default FormExample;
  