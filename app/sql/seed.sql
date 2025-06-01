-- 초기화
SELECT public.cleanup();

-- 기본 유저 (필요 시)
INSERT INTO public.profiles (profile_id, name, username, role)
VALUES ('public-user', '공개사용자', 'guestuser', 'guest');

-- 공개 회상 메모리 예시
INSERT INTO public.memories (user_id, date, content, weather, location, mood, is_public)
VALUES
  ('public-user', '2005-11-17', '수능 끝나고 친구들과 밤새 피시방에서 놀았던 날. 비가 왔지만 너무 즐거웠다.', '비', '신촌', '해방감', true),
  ('public-user', '1998-05-01', '할머니 집에서 본 첫 드라마. 작고 낡은 TV지만 아직도 장면이 기억난다.', '흐림', '대구', '그리움', true),
  ('public-user', '2010-03-02', '첫 출근길, 아직은 낯설고 떨렸지만 세상에 나가는 느낌이었다.', '맑음', '강남', '긴장', true);

-- memory_tags
INSERT INTO public.memory_tags (memory_id, tag)
VALUES
  (1, '수능'), (1, '친구'), (1, '밤샘'),
  (2, '가족'), (2, 'TV'), (2, '할머니'),
  (3, '첫직장'), (3, '사회초년생');

-- memory_media
INSERT INTO public.memory_media (memory_id, url, type)
VALUES
  (1, 'https://example.com/image1.jpg', 'image'),
  (3, 'https://example.com/office.jpg', 'image');
