class Climate < ActiveRecord::Base
    has_and_belongs_to_many :planets
    validates_uniqueness_of :name
end