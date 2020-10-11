class Post < ApplicationRecord
  mount_uploader :avatar, AvatorUploader
end
