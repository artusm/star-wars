class Gender < ActiveRecord::Base
    has_many :character
    validates_uniqueness_of :name
end