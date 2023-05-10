package com.example.demo;


import java.io.Serializable;
import java.util.Objects;

public class ChattingId implements Serializable {
    private Long PostID;
    private Long UserID;

    // equals and hashCode methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ChattingId that = (ChattingId) o;

        if (!Objects.equals(PostID, that.PostID)) return false;
        return Objects.equals(UserID, that.UserID);
    }

    @Override
    public int hashCode() {
        int result = PostID != null ? PostID.hashCode() : 0;
        result = 31 * result + (UserID != null ? UserID.hashCode() : 0);
        return result;
    }
}

//다양한 색상의 구슬로 가득 찬 상자가 있고 상자에 있는 각 구슬을 식별하려고 한다고 상상해 봅시다. 이렇게 하려면 각 구슬에 고유한 식별자를 할당해야 합니다.
//이 비유에서 ChattingId 클래스는 각 구슬의 식별자와 같습니다. 이는 PostID 및 UserID의 두 필드로 구성된 복합 기본 키를 정의합니다. 이러한 필드는 데이터베이스 테이블에서 특정 레코드를 식별하는 데 사용할 수 있는 고유한 값을 나타냅니다.
//ChattingId 클래스의 equals 및 hashCode 메서드는 상자의 구슬을 비교하고 정렬하는 데 사용하는 도구와 같습니다.
//equals 메서드는 두 개의 ChattingId 객체가 동일한 PostID 및 UserID 값을 가지고 있는지 확인합니다. 마치 두 개의 구슬을 비교하여 색상과 크기가 같은지 확인하는 것과 같습니다. hashCode 메서드는 상자의 각 구슬을 식별하기 위해 고유 번호를 사용하는 것처럼 각 ChattingId 객체에 대해 고유한 해시 코드를 생성합니다.
//전반적으로 ChattingId 클래스는 데이터베이스 테이블의 각 레코드를 고유하게 식별하는 방법을 제공합니다. 이는 식별자가 상자의 각 구슬을 고유하게 식별하는 방법을 제공하는 것과 매우 유사합니다.